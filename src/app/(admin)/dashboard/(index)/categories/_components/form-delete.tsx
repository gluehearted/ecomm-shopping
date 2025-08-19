"use client"

import { Button } from '@/components/ui/button'
import { ActionResult } from '@/types'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { deleteCategory } from '../lib/actions'

const initialState: ActionResult = {
    error: ''
}

interface FormDeleteProps {
    id: number
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type='submit' variant='destructive' size="sm" disabled={pending}>
            {pending ? "Loading..." : "Delete"}
        </Button>
    )
}

export default function FormDelete({id}: FormDeleteProps) {
const deleteCategoryWithId = (_:unknown, formData: FormData) => deleteCategory(_, formData, id)

    const [, formAction] = useFormState(deleteCategoryWithId, initialState )

  return (
    <form action={formAction}>
        <SubmitButton />
    </form>
  )
}
