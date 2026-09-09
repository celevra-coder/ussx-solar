import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Блог')
    .items([
      S.documentTypeListItem('post').title('Статии'),
      S.documentTypeListItem('category').title('Категории'),
      S.documentTypeListItem('author').title('Автори'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author'].includes(item.getId()!),
      ),
    ])
