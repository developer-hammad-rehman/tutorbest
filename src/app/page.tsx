"use client";
import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import DocxReader from "./component/DocReader";
import { EmptyState } from "./component/EmptyState";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PackageOpen } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
interface Idata {
  input: string;
}
export default function Home() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Idata>();
 const {push} = useRouter()
  const onSubmit: SubmitHandler<Idata> = async (data) => {
    reset();
    const res = await fetch("/api/userdata", {
      method: "POST",
      body: JSON.stringify({ input: data.input }),
    });
    console.log(await res.json());
    console.log(data.input);
  };
  return (
    <div className="md:grid grid-cols-12 grid-rows-6 h-screen">
      <aside className="col-span-3 row-span-6 bg-gray-100 py-10 flex flex-col justify-evenly items-center h-screen md:h-full">
        <Image
          src={logo}
          alt="logo"
          className="w-36 mx-auto cursor-pointer hover:bg-white"
        />
        <AlertDialog>
          <AlertDialogTrigger className="text-center p-6 bg-purple-500 w-fit font-bold rounded-full text-white">
            Upload
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Upload Content</AlertDialogTitle>
              <AlertDialogDescription>
                <Tabs
                  defaultValue="document"
                  className="w-full flex flex-col  justify-center"
                >
                  <TabsList>
                    <TabsTrigger value="document">Upload Doucument</TabsTrigger>
                    <TabsTrigger value="text">Enter Text</TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="document"
                    className="h-full flex flex-col justify-center items-center py-4 gap-4"
                  >
                    <PackageOpen size={100} />
                    <DocxReader />
                  </TabsContent>
                  <TabsContent value="text">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col gap-2"
                    >
                      <Textarea
                        placeholder="Enter Your Content"
                        {...register("input", {
                          required: "Enter Your Content",
                          
                        })}
                      />
                      {errors.input?.message ||
                        (errors.input?.type === "minLength" && (
                          <p className="text-red-700" role="alert">
                            minLength 3000 characters
                          </p>
                        )) ||
                        (errors.input?.type === "maxLength" && (
                          <p className="text-red-700" role="alert">
                            maxLength 4000 characters
                          </p>
                        ))}
                      <button className="p-4 bg-gray-50" onClick={() => push('/lesson')}>Sumbit</button>
                    </form>
                  </TabsContent>
                </Tabs>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </aside>
      <EmptyState className="text-3xl font-bold col-span-9 row-span-6 justify-center items-center hidden md:flex" />
    </div>
  );
}
