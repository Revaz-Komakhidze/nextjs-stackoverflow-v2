import { Button } from "@/components/ui/button";
import Link from "next/link";

// const questions = [
//   {
//     _id: "1",
//     title: "Cascading Deletes in SQLAlchemy?",
//     tags: [
//       { _id: "1", name: "python" },
//       { _id: "2", name: "sql" },
//     ],
//     author: {
//       _id: "1",
//       name: "John Doe",
//       picture: "john-doe.jpg",
//     },
//     upvotes: 1500000,
//     views: 500552,
//     answers: [],
//     createdAt: new Date("2023-09-01T12:00:00.000Z"),
//   },
//   {
//     _id: "2",
//     title: "How to center a div?",
//     tags: [
//       { _id: "3", name: "css" },
//       { _id: "4", name: "html" },
//     ],
//     author: {
//       _id: "2",
//       name: "Jane Smith",
//       picture: "jane-smith.jpg",
//     },
//     upvotes: 5,
//     views: 50,
//     answers: [],
//     createdAt: new Date("2021-09-02T10:30:00.000Z"),
//   },
// ];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        LocalSearchbar Filter
      </div>
      HomeFilters
      <div className="mt-10 flex w-full flex-col gap-6"></div>
    </>
  );
}
