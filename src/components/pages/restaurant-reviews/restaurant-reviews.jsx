import { ReviewForm } from "../../review-form/review-form";
import { useAuth } from "../../context/auth-context/use-auth";
import { useParams } from "react-router-dom";
import { Review } from "./restaurant-review";
import { useCallback } from "react";
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useUpdateReviewMutation,
} from "../../../redux/services/api/api";
import { CSpinner } from "@coreui/react";

export const RestaurantReviews = () => {
  const { id } = useParams();

  const { auth } = useAuth();

  const { data, isFetching: isGetReviewsFetching } =
    useGetReviewsByRestaurantIdQuery(id);
  useGetUsersQuery();

  const [addReview, { isLoading: isAddReviewFetching }] =
    useAddReviewMutation(id);

  const [updateReview, { isLoading: isUpdateReviewFetching }] =
    useUpdateReviewMutation();

  const handleAddReview = useCallback(
    (review) => {
      addReview({ id, review });
    },
    [addReview, id]
  );

  const handleEditReview = useCallback(
    (reviewId, updatedReview) => {
      updateReview({ reviewId, updatedReview });
    },
    [updateReview]
  );

  if (isGetReviewsFetching || isAddReviewFetching) {
    return (
      <div className="d-flex justify-content-center p-3">
        <CSpinner />
      </div>
    );
  }

  if (isUpdateReviewFetching) {
    return (
      <div className="d-flex justify-content-center p-3">
        <CSpinner />
      </div>
    );
  }

  if (!data || !data.length) {
    return null;
  }

  return (
    <div>
      <div className="mb-5">
        {data.map((review) => {
          return (
            <Review
              key={review.id}
              review={review}
              handleEditReview={handleEditReview}
            />
          );
        })}
      </div>

      {auth.isAuthorized && (
        <div>
          <h4 className="text-warning">
            Станьте нашим дегустатором и оставьте отзыв:
          </h4>
          <ReviewForm onSubmit={handleAddReview} />
        </div>
      )}
    </div>
  );
};
