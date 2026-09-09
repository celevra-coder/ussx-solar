import {UserIcon} from '@sanity/icons/User'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Автор',
  type: 'document',
  icon: UserIcon,

  fields: [
    defineField({
      name: 'name',
      title: 'Име',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Адрес',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),

    defineField({
      name: 'image',
      title: 'Снимка',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'bio',
      title: 'Кратко представяне',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Нормален текст', value: 'normal'}],
          lists: [],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
