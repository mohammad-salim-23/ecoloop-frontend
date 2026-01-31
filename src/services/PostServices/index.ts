/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { cookies } from "next/headers"
import { FieldValues } from "react-hook-form";

//  post make and update
export const handlePost = async (postData: FieldValues) => {
    const accessToken = (await cookies()).get("accessToken")?.value;
    
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/create-post`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(postData),
        })

        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
}


export const getAllPosts = async () => {
    const accessToken = (await cookies()).get("accessToken")?.value;

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            next: { revalidate: 10 } // ১০ সেকেন্ড পর পর ক্যাশ আপডেট করবে
        })

        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
}


export const getSinglePost = async (postId: string) => {
    const accessToken = (await cookies()).get("accessToken")?.value;

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${postId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })

        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
}


export const deletePost = async (postId: string) => {
    const accessToken = (await cookies()).get("accessToken")?.value;

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${postId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })

        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
}