import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Статия',
  type: 'document',
  icon: DocumentTextIcon,

  fields: [
    defineField({
      name: 'title',
      title: 'Заглавие',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Адрес на статията',
      type: 'slug',
      description: 'Натиснете Generate, за да се създаде адрес от заглавието.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Кратко описание',
      type: 'text',
      rows: 3,
      description: 'Показва се в картата на статията в блога.',
      validation: (Rule) => Rule.max(240),
    }),

    defineField({
      name: 'author',
      title: 'Автор',
      type: 'reference',
      to: {type: 'author'},
    }),

    defineField({
      name: 'mainImage',
      title: 'Основна снимка',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Описание на снимката',
          type: 'string',
          description: 'Кратко описание за достъпност и SEO.',
        }),
      ],
    }),

    defineField({
      name: 'categories',
      title: 'Категории',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: {type: 'category'},
        }),
      ],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Дата на публикуване',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'body',
      title: 'Съдържание',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO заглавие',
      type: 'string',
      description: 'По желание. Ако е празно, ще се използва заглавието на статията.',
      validation: (Rule) => Rule.max(70),
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO описание',
      type: 'text',
      rows: 3,
      description: 'Описание за Google и споделяне в социални мрежи.',
      validation: (Rule) => Rule.max(160),
    }),
  ],

  orderings: [
    {
      title: 'Най-нови първо',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {author, publishedAt} = selection

      return {
        ...selection,
        subtitle: [
          author,
          publishedAt
            ? new Date(publishedAt).toLocaleDateString('bg-BG')
            : null,
        ]
          .filter(Boolean)
          .join(' • '),
      }
    },
  },
})
