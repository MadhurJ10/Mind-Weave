import React, { useContext } from "react";
import ReviewCard from "./ReviewCard";
import { ReviewContext } from "../context/ReviewProvider";

const ReviewsGrid = () => {
  const {review } = useContext(ReviewContext);
  const reviews = review.Mindweave_Reviews
  // console.log(review)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-[4rem]">
      {reviews.map((item, index) => (
        <ReviewCard
          key={index}
          name={item.name}
          review={item.review}
          img={item.img.src}
        />
      ))}
    </div>
  );
};

export default React.memo(ReviewsGrid);
