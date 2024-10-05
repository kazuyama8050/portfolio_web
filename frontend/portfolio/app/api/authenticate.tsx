"use server";
import { z } from 'zod'
import { redirect } from 'next/navigation';

const loginFormSchema = z.object({
    email: z.string()
    .min(1, { message: '入力が必須の項目です' })
    .max(255, { message: '255文字以内で入力してください' })
    .email({ message: 'メールアドレスの形式で入力してください' }),
    password: z.string()
    .min(8, { message: '8文字以上の文字列をしてください' })
})

export async function login(
    prevState: any,
    formData: FormData,
) {
    const validatedFields = loginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    })
    if (!validatedFields.success) {
        return {
            message: validatedFields.error.flatten().fieldErrors,
        }
    }
    const response = await fetch(
        "/api/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({formData})
        }
    )
    redirect('/');
}