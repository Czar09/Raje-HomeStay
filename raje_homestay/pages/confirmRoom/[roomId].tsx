import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Room } from '../../typing'
import { fetchRooms } from '../../utils/fetchRooms'

type Props = {
	rooms: Room[]
}

const Search = ({ rooms }: Props)=>{


	const router = useRouter();
	const { query } = useRouter();
	const getTimestamp = (date: Date) => Math.round(date.getTime() / 1000);
	const getCurrentTimestamp = () => getTimestamp(new Date());
	const { roomType, numOfRoom, checkInTimestamp, checkOutTimestamp, numOfDays, guests, price } = router.query;

	const roomId = query.roomId as string;
	const roomData = rooms.find((ele) => ele.roomTypeId == query.roomId)!;
	var todate = new Date(Number(checkInTimestamp) * 1000)
	const checkInDate = todate.toDateString();
	var checkout = new Date(Number(checkOutTimestamp) * 1000);
	const checkoutDate = checkout.toDateString();
	const pricePaid = parseInt(price as string);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		price: pricePaid,
	});

	const { name, email, phoneNumber } = formData;

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });


	const formData2 = {
		email: formData.email,
		name: formData.name,
		phoneNumber: formData.phoneNumber,
		checkInTimestamp: +(checkInTimestamp as string),
		checkOutTimestamp: +(checkOutTimestamp as string),
		bookingTimestamp: getCurrentTimestamp(),
		numOfGuests: +(guests as string),
		roomType: roomType as string,
		price: price as string,
		numOfRooms: +(numOfRoom as string)
	};

	const confirmRoom = async () => {
		const numRoom = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/confirmRoom`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(formData2)
		})
		if (numRoom.status == 200) {
			router.push('/');
		}
	}

	const makePayment = async () => {
		const res = await initializeRazorpay();

		if (!res) {
			alert("Razorpay SDK Failed to load");
			return;
		}

		// Make API call to the serverless API
		const data = await fetch("/api/razorpay", {
			method: "POST",
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				"amount": pricePaid
			}),
		}).then((t) =>
			t.json()
		);
		var options = {
			key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
			name: "Rajae HomeStay",
			currency: data.currency,
			amount: data.amount,
			order_id: data.id,
			description: "Thankyou for your test donation",
			image: "http://localhost:3000/logo.jpeg",
			handler: function (response: any) {
				confirmRoom();
			},
			prefill: {
				name: formData.name,
				email: formData.email,
				contact: formData.phoneNumber,
			},
		};
		const _window = window as any;
		const paymentObject = new _window.Razorpay(options);
		paymentObject.open();
	};
	const initializeRazorpay = () => {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = "https://checkout.razorpay.com/v1/checkout.js";
			// document.body.appendChild(script);
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};

			document.body.appendChild(script);
		});
	};
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (phoneNumber.length != 10) {
			toast.error('Enter valid phone number');
		} else {
			makePayment();
		}
	};

	return (
		<div className='bg-[#6646b3] flex flex-col h-screen'>
			<div className='relative flex min-h-full justify-center md:px-12 lg:px-0 bg-slate-500'>
			<div className='relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28'>
				<ToastContainer
					position="bottom-center"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				<div className='mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0'>
					<div className='flex flex-col'>
						<Link aria-label="Home" href="#">
							<button className='items-center ml-40'>
								<Image src="/logo.jpeg"
									alt="Picture of the author"
									width={100}
									height={200} />
							</button>
						</Link>
						<div className='mt-20'>
							<h2 className="text-lg font-semibold text-gray-900">Please Fill the Details</h2>
							{/* <p className="mt-2 text-sm text-gray-700">Don’t have an account? <a className="font-medium text-blue-600 hover:underline" href="/register">Sign up</a> for a free trial.</p>     */}
						</div>
					</div>
					<form className="pt-6 pb-8 mb-4 mt-4 bg-white rounded" onSubmit={onSubmit}>
						<div className="mb-4 md:flex md:justify-between">
							<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-bold text-gray-700">
									Full Name
								</label>
								<input
									// {...register("fullName", {required:true, maxLength: 25, pattern: /^[A-Za-z]+$/i })}
									className="contactInput"
									id="firstName"
									type="text"
									placeholder="First Name"
									name='name'
									value={name}
									required={true}
									onChange={onChange}
								/>
							</div>
							<div className="md:ml-2">
								<label className="block mb-2 text-sm font-bold text-gray-700" >
									Phone Number
								</label>
								<input
									// {...register("phoneNumber",{required:true})}
									className="contactInput"
									id="phoneNumber"
									type="text"
									minLength={10}
									placeholder="PhoneNumber"
									name='phoneNumber'
									value={phoneNumber}
									required={true}
									onChange={onChange}
									maxLength={10}
								/>
							</div>
						</div>
						<div className="mb-4 md:flex md:justify-between">
							<div className="md:ml-2">
								<label className="block mb-2 text-sm font-bold text-gray-700" >
									CheckIn Date
								</label>
								<input
									// {...register("phoneNumber",{required:true})}
									className="contactInput"
									id="phoneNumber"
									type="text"
									minLength={10}
									placeholder="PhoneNumber"
									name='phoneNumber'
									value={checkInDate}
									required={true}
									onChange={onChange}
									maxLength={10}
									disabled={true}
								/>
							</div>
							<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-bold text-gray-700">
									CheckOutDate
								</label>
								<input
									// {...register("fullName", {required:true, maxLength: 25, pattern: /^[A-Za-z]+$/i })}
									className="contactInput"
									id="firstName"
									type="text"
									placeholder="First Name"
									name='name'
									value={checkoutDate}
									required={true}
									onChange={onChange}
									disabled={true}
								/>
							</div>

						</div>
						<div className="mb-4">
							<label className=" block mb-2 text-sm font-bold text-gray-700" >
								Email
							</label>
							<input
								// {...register("email")}
								className="contactInput2"
								id="email"
								type="email"
								placeholder="Email"
								name='email'
								required={true}
								value={email}
								onChange={onChange}
							/>
						</div>

						<div className="mb-6 text-center ">
							<button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								type="submit">
								Proceed To Pay
							</button>
						</div>
						<hr className="mb-6 border-t" />
					</form>
				</div>
			</div>
		</div>
		</div>
	)
}

export default Search;


export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const rooms: Room[] = await fetchRooms();
	return {
		props: {
			rooms
		}
	}
}