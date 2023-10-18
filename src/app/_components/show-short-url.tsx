import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function ShowShortUrl({
  url,
  originalUrl,
}: {
  url: string;
  originalUrl: string;
}) {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shortened Url is ready! 🥳</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-2">
          <p className="scroll-m-20 text-xl font-semibold tracking-tight">
            New url:
          </p>
          <a href={url}> {url} </a>
          <p className="scroll-m-20 text-xl font-semibold tracking-tight">
            Old url:
          </p>
          <p>{originalUrl}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={async() => {
            await navigator.clipboard.writeText(url);
            setIsCopied(true);
          }}
        >
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </CardFooter>
    </Card>
  );
}
