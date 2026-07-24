import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-4 text-center">
      {/* Icon */}
      <div className="mb-6 inline-flex items-center justify-center rounded-full bg-muted p-8">
        <FontAwesomeIcon
          icon={faTshirt}
          className="size-20 text-primary/60 animate-flash"
        />
      </div>

      {/* 404 */}
      <h1 className="mb-2 text-7xl font-extrabold tracking-tight text-foreground sm:text-8xl">
        404
      </h1>

      {/* Message */}
      <p className="mb-2 max-w-md text-lg font-medium text-foreground">
        Looks like this page got lost in the wash!
      </p>
      <p className="mb-8 max-w-md text-sm text-muted-foreground">
        We searched every hamper but couldn&apos;t find what you&apos;re
        looking for. Maybe it&apos;s still in the spin cycle?
      </p>

      {/* Actions */}
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Link href="/" className="inline-flex">
          <Button size="lg">Back Home</Button>
        </Link>
        <Link href="/contact" className="inline-flex">
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}
