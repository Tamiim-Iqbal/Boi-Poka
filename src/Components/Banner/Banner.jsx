import React from 'react';
import bannerImg from '../../../public/Resources/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-md rounded-lg shadow-2xl" />
    <div>
      <h1 className="w-3/5 text-5xl font-bold">Books to freshen up your bookshelf</h1>
      <button className="btn btn-primary mt-8">View the list</button>
    </div>
  </div>
</div>
    );
};

export default Banner;