import { Avatar } from "@nextui-org/react";

export default function CommentList() {
  return (
    <div>
      <div className="flex gap-6 items-center">
        <span>
          <Avatar />
        </span>
        <span>
          <p className="font-medium">Jored Smith</p>
          <p>March 12, 2023</p>
        </span>
      </div>
      <div className="mt-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          quaerat veniam maxime velit incidunt voluptatem at dolores odio. Ipsa,
          est hic aspernatur natus repellendus autem delectus iste mollitia
          molestiae? Dolorum?
        </p>
      </div>
    </div>
  );
}
