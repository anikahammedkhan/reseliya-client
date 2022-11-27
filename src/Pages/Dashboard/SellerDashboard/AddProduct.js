import React, { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthContext } from '../../../Context/UserContext';

const AddProduct = () => {
    const { user } = useContext(AuthContext);

    // current date and time
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;
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
            <form onSubmit="" className='w-3/4 mx-auto'>
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
                            <option selected>Apple</option>
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
                        <input name="seller-number" type="number" placeholder="location" className="input input-ghost  input-bordered" required />
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
                        <input name="original-price" type="number" placeholder="Your originaly Price $" defaultValue="" className="input input-ghost  input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Reseller price</span>
                        </label>
                        <input name="original-price" type="number" placeholder="Your originaly Price $" defaultValue="" className="input input-ghost  input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Service Ratings</span>
                        </label>
                        <input name="ratings" type="number" placeholder="Your Service Ratings" defaultValue="" className="input input-ghost  input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Comments  (If You Have Any)</span>
                        </label>
                        <input name="comments" type="text" placeholder="Your Comments (You can leave this empty if you want)" defaultValue="" className="input input-ghost  input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Service Details</span>
                    </label>
                    <textarea name="details" className="textarea textarea-bordered h-24 w-full" placeholder="Your Service Details" required></textarea>
                </div>
                <div className='text-center my-10'>
                    <input className='btn btn-info px-10' type="submit" value="Add Service" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;