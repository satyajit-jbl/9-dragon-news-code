
import { AiFillStar, AiOutlineShareAlt, AiOutlineHeart } from 'react-icons/ai';

const NewsCard = ( props = {} ) => {
    const {news} = props || {} ;

  return (
    <div className="card shadow-lg rounded-lg p-4 bg-white border border-gray-200">
      <div className="flex items-center mb-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="font-bold text-gray-800">{news.author.name}</p>
          <p className="text-sm text-gray-500">{new Date(news.author.published_date).toDateString()}</p>
        </div>
        <div className="ml-auto flex space-x-2 text-gray-500">
          <AiOutlineShareAlt className="cursor-pointer" />
          <AiOutlineHeart className="cursor-pointer" />
        </div>
      </div>
      
      <h2 className="font-semibold text-lg text-gray-900 mb-2">{news.title}</h2>

      <img
        src={news.thumbnail_url}
        alt={news.title}
        className="w-full h-48 object-fit object-cover rounded-lg mb-4"
      />

      <p className="text-gray-600 mb-2">{new Date(news.author.published_date).toDateString()}</p>
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Tags:</span> {news.details}
      </p>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center text-orange-500">
          <AiFillStar />
          <span className="ml-1 font-medium">{news.rating.number}</span>
        </div>
        <span className="text-gray-600">{news.total_view} views</span>
      </div>
    </div>
  );
};

export default NewsCard;
