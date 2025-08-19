import React from 'react'
import { Tedit } from '@/types';
import FormBrand from '../../_components/form-brands';
import { getBrandById } from '../../lib/data';
import { redirect } from 'next/navigation';

export default async function EditPage({params}: Tedit) {
    const { id } = await params;
    const brand = await getBrandById(id)

    if (!brand) {
        return redirect('/dashboard/brands')
    }

  return (
    <FormBrand type="EDIT" data={brand} />
  )
}
