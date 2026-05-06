"use server"

import { revalidatePath, revalidateTag } from "next/cache"

export const revalidateServerPath = async (path: string) => {
	revalidatePath(path, "page") // o "layout" según tu caso
}

export const revalidateServerTags = async (tag: string) => {
	revalidateTag(tag, "auto") // revalidación inmediata y segura
}
