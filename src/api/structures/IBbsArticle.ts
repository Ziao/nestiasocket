import type { Format } from "typia/lib/tags/Format";
import type { Type } from "typia/lib/tags/Type";

import type { IAttachmentFile } from "./IAttachmentFile";
import type { IPage } from "./IPage";

/**
 * BBS article.
 */
export type IBbsArticle =
  /**
   * BBS article.
   */
  {
    /**
     * Primary Key.
     */
    id: string & Format<"uuid">;
    /**
     * Section code.
     */
    section: string;
    /**
     * Name of nickname of writer.
     */
    writer: string;
    /**
     * List of snapshot contents.
     *
     * Whenever updating an article, its contents would be accumulated.
     */
    snapshots: IBbsArticle.ISnapshot[];
    /**
     * Creation time of the article.
     */
    created_at: string & Format<"date-time">;
  };
export namespace IBbsArticle {
  /**
   * Page request info with some options.
   */
  export type IRequest =
    /**
     * Page request info with some options.
     */
    {
      /**
       * Searching options.
       */
      search?: undefined | IBbsArticle.IRequest.ISearch;
      /**
       * Sorting options.
       *
       * The plus sign means ASC and minus sign means DESC.
       */
      sort?: undefined | IPage.SortIBbsArticle.IRequest.SortableColumns;
      /**
       * Page number.
       */
      page?: undefined | (number & Type<"uint32">);
      /**
       * Limitation of records per a page.
       */
      limit?: undefined | (number & Type<"uint32">);
    };
  export namespace IRequest {
    /**
     * Searching options.
     */
    export type ISearch =
      /**
       * Searching options.
       */
      {
        writer?: undefined | string;
        title?: undefined | string;
        body?: undefined | string;
      };
  }
  /**
   * Summarized info.
   */
  export type ISummary =
    /**
     * Summarized info.
     */
    {
      id: string;
      writer: string;
      title: string;
      created_at: string;
      updated_at: string;
    };
  /**
   * Content info.
   */
  export type ISnapshot =
    /**
     * Content info.
     */
    {
      /**
       * Primary key of individual content.
       */
      id: string & Format<"uuid">;
      /**
       * Creation time of this content.
       */
      created_at: string & Format<"date-time">;
      /**
       * Title of the article.
       */
      title: string;
      /**
       * Format of the content body.
       */
      format: "md" | "html" | "txt";
      /**
       * Content body.
       */
      body: string;
      /**
       * List of files (to be) attached.
       */
      files: IAttachmentFile[];
    };
  /**
   * Store info.
   */
  export type ICreate =
    /**
     * Store info.
     */
    {
      /**
       * Name or nickname of the writer.
       */
      writer: string;
      /**
       * Title of the article.
       */
      title: string;
      /**
       * Content body.
       */
      body: string;
      /**
       * Format of the content body.
       */
      format: "md" | "html" | "txt";
      /**
       * List of files (to be) attached.
       */
      files: IAttachmentFile[];
      /**
       * Password of the article.
       */
      password: string;
    };
  /**
   * Update info.
   */
  export type IUpdate =
    /**
     * Update info.
     */
    {
      /**
       * Title of the article.
       */
      title: string;
      /**
       * Content body.
       */
      body: string;
      /**
       * Format of the content body.
       */
      format: "md" | "html" | "txt";
      /**
       * List of files (to be) attached.
       */
      files: IAttachmentFile[];
      /**
       * Password of the article.
       */
      password: string;
    };
}
