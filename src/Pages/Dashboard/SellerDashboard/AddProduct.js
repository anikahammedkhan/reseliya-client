import React, { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // current date and time
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;


    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const image = form.image.value;
        const condition = form.condition.value;
        const description = form.description.value;
        const resale_price = form.resalePrice.value;
        const original_price = form.originalPrice.value;
        const location = form.location.value;
        const time = dateTime;
        const seller_name = form.seller_name.value;
        const seller_email = user?.email;
        const seller_phone = form.sellerPhone.value;
        const verified = true;
        const year_used = form.yearUsed.value;
        const status = 'available';

        const product = {
            name,
            brand,
            image,
            condition,
            description,
            resale_price,
            original_price,
            location,
            time,
            seller_name,
            seller_email,
            seller_phone,
            verified,
            year_used,
            status
        }

        fetch('https://reseliya-server.vercel.app/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Product added successfully');
                    form.reset();
                    navigate('/dashboard/my-products');

                }
            })
            .catch(error => console.error(error));

    }
    return (
        <div className='my-8'>
            <HelmetProvider>
                <Helmet>
                    <title>Seller-Add A Product</title>
                    <meta name="description" content="my-products" />
                </Helmet>
            </HelmetProvider>
            <h1 className='text-4xl font-bold text-green-500 text-center'>Add a Product</h1>
            <p className='text-lg text-center font-semibold text-red-600'>
                Please fill up the form below to add a new product.
            </p>
            <form onSubmit={handleAddProduct} className='w-3/4 mx-auto'>
                <div className='grid grid-cols-1 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Product Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Your Product Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Product Brand</span>
                        </label>
                        <select name='brand' className="select select-bordered">
                            <option defaultValue>Apple</option>
                            <option>Xiaomi</option>
                            <option>Nokia</option>
                            <option>Samsung</option>
                            <option>OnePlus</option>
                            <option>Realme</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input name='image' type="text" placeholder="Your Image Url Here" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input name='description' type="text" placeholder="Your product description here" className="input input-bordered" required />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Condition ( Excellent, Good, Fair )</span>
                        </label>
                        <input name="condition" type="text" placeholder="Condition" className="input input-ghost  input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input name="location" type="text" placeholder="location" className="input input-ghost  input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name="seller_name" type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input input-ghost  input-bordered" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input name="seller_email" type="email" placeholder="Your email" defaultValue={user?.email} className="input input-ghost  input-bordered" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Contact Number</span>
                        </label>
                        <input name="sellerPhone" type="number" placeholder="Your Number" className="input input-ghost  input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Current Time</span>
                        </label>
                        <input name="time" type="text" placeholder="Your Current Time" defaultValue={dateTime} className="input input-ghost  input-bordered" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input name="originalPrice" type="number" placeholder="Your originaly Price $" defaultValue="" className="input input-ghost  input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Reseller price</span>
                        </label>
                        <input name="resalePrice" type="number" placeholder="Your resale Price $" defaultValue="" className="input input-ghost  input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Years of use</span>
                        </label>
                        <input name="yearUsed" type="number" placeholder="Years of use" defaultValue="" className="input input-ghost  input-bordered" required />
                    </div>
                </div>
                <div className='text-center my-10'>
                    <input className='btn btn-success px-10' type="submit" value="Add Service" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;