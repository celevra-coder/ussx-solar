import {TagIcon} from '@sanity/icons/Tag'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Категория',
  type: 'document',
  icon: TagIcon,

  fields: [
    defineField({
      name: 'title',
      title: 'Име',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Адрес',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),

    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 3,
    }),
  ],
})
