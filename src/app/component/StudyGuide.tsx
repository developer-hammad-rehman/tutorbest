import { ScrollArea } from "@/components/ui/scroll-area";
import { cookies, headers } from "next/headers";
export default async function StudyGuide() {
  const input = cookies().get('userdata')?.value
  const response = await fetch(`${process.env.APP_URL}/api/studyguide`, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify({
      prompt:
      input
  ,
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