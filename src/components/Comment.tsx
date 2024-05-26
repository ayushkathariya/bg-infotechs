import { Button, Input, Textarea } from "@nextui-org/react";

export default function Comment() {
  return (
    <div>
      <h4 className="font-bold text-3xl">Leave a Reply</h4>
      <p className="mt-2">
        Your email Address Not Be Published. Requied Fields are Marked
      </p>
      <form className="flex flex-col gap-3 mt-3">
        <Input
          type="text"
          placeholder="Enter your Name"
          className="md:w-[70%] lg:w-[60%]"
        />
        <Textarea
          label="Comment"
          placeholder="Write your comment"
          className="md:w-[70%] lg:w-[60%]"
        />
        <Button type="submit" className="w-44">
          Submit
        </Button>
      </form>
    </div>
  );
}
