import type { Type } from "typia/lib/tags/Type";

export namespace IPage {
  export namespace SortIBbsArticle {
    export namespace IRequest {
      /**
       * Sorting column specialization.
       *
       * The plus means ascending order and the minus means descending order.
       */
      export type SortableColumns = (
        | "-writer"
        | "-title"
        | "-created_at"
        | "-updated_at"
        | "+writer"
        | "+title"
        | "+created_at"
        | "+updated_at"
      )[];
    }
  }
  /**
   * Page information.
   */
  export type IPagination =
    /**
     * Page information.
     */
    {
      /**
       * Current page number.
       */
      current: number & Type<"uint32">;
      /**
       * Limitation of records per a page.
       *
       * @default 100
       */
      limit: number & Type<"uint32">;
      /**
       * Count of total records in database.
       */
      records: number & Type<"uint32">;
      /**
       * Number of total pages.
       *
       * Equal to {@link records } / {@link limit } with ceiling.
       */
      pages: number & Type<"uint32">;
    };
}
