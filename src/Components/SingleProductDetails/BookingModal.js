import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const BookingModal = ({ product }) => {
    const { _id, name, image, resale_price, seller_name, seller_email } = product;

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.name.value;
        const buyerEmail = form.email.value;
        const buyerPhone = form.phone.value;
        const buyerAddress = form.buyerLocation.value;

        const bookingData = {
            buyerName,
            buyerEmail,
            buyerPhone,
            buyerAddress,
            productId: _id,
            productName: name,
            productPrice: resale_price,
            productImage: image,
            sellerEmail: seller_email,
            sellerName: seller_name
        }

        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("Booking Successful");
                    form.reset();
                    navigate("/dashboard/my-orders");
                }
                else {
                    toast.error("Booking Failed");
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <img src={image} alt="" className='w-1/3' />
                        <label htmlFor="name" className="">Your Name</label>
                        <input name="name" type="text" disabled placeholder="Your Name" value={user?.displayName} className="input w-full input-bordered" />
                        <label htmlFor="email" className="">Your Email</label>
                        <input name="email" type="email" disabled placeholder="Email Address" value={user?.email} className="input w-full input-bordered" />
                        <label htmlFor="price" className="">Product Resell Price</label>
                        <input name="price" type="text" disabled placeholder="Resell Price" value={resale_price + "$"} className="input w-full input-bordered" />
                        <label htmlFor="phone" className="">Your Phone Number</label>
                        <input name="phone" type="number" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <label htmlFor="buyerLocation" className="">Your Address</label>
                        <input name="buyerLocation" type="text" placeholder="Your Meeting Location" className="input w-full input-bordered" required />
                        <br />
                        <input className='btn bg-green-500 border-none font-bold w-full text-white hover:bg-green-600' type="submit" value="Confirm Booking" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;