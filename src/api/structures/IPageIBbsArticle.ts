import type { IBbsArticle } from "./IBbsArticle";
import type { IPage } from "./IPage";

export namespace IPageIBbsArticle {
  /**
   * A page.
   *
   * Collection of records with pagination indformation.
   *
   * @author Samchon
   */
  export type ISummary =
    /**
     * A page.
     *
     * Collection of records with pagination indformation.
     *
     * @author Samchon
     */
    {
      /**
       * Page information.
       */
      pagination: IPage.IPagination;
      /**
       * List of records.
       */
      data: IBbsArticle.ISummary[];
    };
}
