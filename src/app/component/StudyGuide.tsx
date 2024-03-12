import { ScrollArea } from "@/components/ui/scroll-area";
import { cookies, headers } from "next/headers";
export default async function StudyGuide() {
  const host = headers().get("host");
  const input = cookies().get('userdata')
  const response = await fetch(`https://tutorbest-one.vercel.app/api/studyguide`, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify({
      prompt:
       input?.value ,
    }),
  });
  const data = await response.json();
  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        <ScrollArea className="w-[300px] sm:w-[500px] h-[500px] py-6 px-6">
          <div dangerouslySetInnerHTML={{ __html: data.response }}></div>
        </ScrollArea>
      </div>
    </>
  );
}