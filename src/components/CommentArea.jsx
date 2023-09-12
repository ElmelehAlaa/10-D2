import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   isLoading: true,
  //   isError: false,
  // };
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchComments = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjE1NGMwMzRmZjAwMTQwM2Y1MzMiLCJpYXQiOjE2OTQwOTExNzEsImV4cCI6MTY5NTMwMDc3MX0.4iQCgMChdawJVCHs990aZB4de6Zn3GqodkDeRIIi9bM",
        },
      });
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        const filteredComments = comments.filter((comment) => comment.elementId === props.asin);
        setComments(filteredComments);
        setIsLoading(false);
        setIsError(false);
      } else {
        console.log("error");
        setIsLoading({ isLoading: false });
        setIsError({ isError: true });
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.fetchComments();
  //   }
  // }

  return (
    <div className="text-center sticky-top" style={{ top: "50px" }}>
      <h2 className="text-center">Sezione Commenti</h2>
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentArea;
