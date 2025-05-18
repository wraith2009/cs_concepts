
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UrlTicket
 * 
 */
export type UrlTicket = $Result.DefaultSelection<Prisma.$UrlTicketPayload>
/**
 * Model Url
 * 
 */
export type Url = $Result.DefaultSelection<Prisma.$UrlPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UrlTickets
 * const urlTickets = await prisma.urlTicket.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UrlTickets
   * const urlTickets = await prisma.urlTicket.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.urlTicket`: Exposes CRUD operations for the **UrlTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UrlTickets
    * const urlTickets = await prisma.urlTicket.findMany()
    * ```
    */
  get urlTicket(): Prisma.UrlTicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.url`: Exposes CRUD operations for the **Url** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Urls
    * const urls = await prisma.url.findMany()
    * ```
    */
  get url(): Prisma.UrlDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UrlTicket: 'UrlTicket',
    Url: 'Url'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "urlTicket" | "url"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UrlTicket: {
        payload: Prisma.$UrlTicketPayload<ExtArgs>
        fields: Prisma.UrlTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UrlTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UrlTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlTicketPayload>
          }
          findFirst: {
            args: Prisma.UrlTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UrlTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlTicketPayload>
          }
          findMany: {
            args: Prisma.UrlTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlTicketPayload>[]
          }
          create: {
            args: Prisma.UrlTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlTicketPayload>
          }
          createMany: {
            args: Prisma.UrlTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UrlTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlTicketPayload>[]
          }
          delete: {
            args: Prisma.UrlTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlTicketPayload>
          }
          update: {
            args: Prisma.UrlTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlTicketPayload>
          }
          deleteMany: {
            args: Prisma.UrlTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UrlTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UrlTicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlTicketPayload>[]
          }
          upsert: {
            args: Prisma.UrlTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlTicketPayload>
          }
          aggregate: {
            args: Prisma.UrlTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrlTicket>
          }
          groupBy: {
            args: Prisma.UrlTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<UrlTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.UrlTicketCountArgs<ExtArgs>
            result: $Utils.Optional<UrlTicketCountAggregateOutputType> | number
          }
        }
      }
      Url: {
        payload: Prisma.$UrlPayload<ExtArgs>
        fields: Prisma.UrlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UrlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UrlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          findFirst: {
            args: Prisma.UrlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UrlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          findMany: {
            args: Prisma.UrlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>[]
          }
          create: {
            args: Prisma.UrlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          createMany: {
            args: Prisma.UrlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UrlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>[]
          }
          delete: {
            args: Prisma.UrlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          update: {
            args: Prisma.UrlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          deleteMany: {
            args: Prisma.UrlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UrlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UrlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>[]
          }
          upsert: {
            args: Prisma.UrlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          aggregate: {
            args: Prisma.UrlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrl>
          }
          groupBy: {
            args: Prisma.UrlGroupByArgs<ExtArgs>
            result: $Utils.Optional<UrlGroupByOutputType>[]
          }
          count: {
            args: Prisma.UrlCountArgs<ExtArgs>
            result: $Utils.Optional<UrlCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    urlTicket?: UrlTicketOmit
    url?: UrlOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model UrlTicket
   */

  export type AggregateUrlTicket = {
    _count: UrlTicketCountAggregateOutputType | null
    _avg: UrlTicketAvgAggregateOutputType | null
    _sum: UrlTicketSumAggregateOutputType | null
    _min: UrlTicketMinAggregateOutputType | null
    _max: UrlTicketMaxAggregateOutputType | null
  }

  export type UrlTicketAvgAggregateOutputType = {
    id: number | null
    range_start: number | null
    range_end: number | null
    current_value: number | null
  }

  export type UrlTicketSumAggregateOutputType = {
    id: number | null
    range_start: number | null
    range_end: number | null
    current_value: number | null
  }

  export type UrlTicketMinAggregateOutputType = {
    id: number | null
    range_start: number | null
    range_end: number | null
    current_value: number | null
  }

  export type UrlTicketMaxAggregateOutputType = {
    id: number | null
    range_start: number | null
    range_end: number | null
    current_value: number | null
  }

  export type UrlTicketCountAggregateOutputType = {
    id: number
    range_start: number
    range_end: number
    current_value: number
    _all: number
  }


  export type UrlTicketAvgAggregateInputType = {
    id?: true
    range_start?: true
    range_end?: true
    current_value?: true
  }

  export type UrlTicketSumAggregateInputType = {
    id?: true
    range_start?: true
    range_end?: true
    current_value?: true
  }

  export type UrlTicketMinAggregateInputType = {
    id?: true
    range_start?: true
    range_end?: true
    current_value?: true
  }

  export type UrlTicketMaxAggregateInputType = {
    id?: true
    range_start?: true
    range_end?: true
    current_value?: true
  }

  export type UrlTicketCountAggregateInputType = {
    id?: true
    range_start?: true
    range_end?: true
    current_value?: true
    _all?: true
  }

  export type UrlTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UrlTicket to aggregate.
     */
    where?: UrlTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UrlTickets to fetch.
     */
    orderBy?: UrlTicketOrderByWithRelationInput | UrlTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UrlTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UrlTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UrlTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UrlTickets
    **/
    _count?: true | UrlTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UrlTicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UrlTicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrlTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrlTicketMaxAggregateInputType
  }

  export type GetUrlTicketAggregateType<T extends UrlTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateUrlTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrlTicket[P]>
      : GetScalarType<T[P], AggregateUrlTicket[P]>
  }




  export type UrlTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrlTicketWhereInput
    orderBy?: UrlTicketOrderByWithAggregationInput | UrlTicketOrderByWithAggregationInput[]
    by: UrlTicketScalarFieldEnum[] | UrlTicketScalarFieldEnum
    having?: UrlTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrlTicketCountAggregateInputType | true
    _avg?: UrlTicketAvgAggregateInputType
    _sum?: UrlTicketSumAggregateInputType
    _min?: UrlTicketMinAggregateInputType
    _max?: UrlTicketMaxAggregateInputType
  }

  export type UrlTicketGroupByOutputType = {
    id: number
    range_start: number
    range_end: number
    current_value: number
    _count: UrlTicketCountAggregateOutputType | null
    _avg: UrlTicketAvgAggregateOutputType | null
    _sum: UrlTicketSumAggregateOutputType | null
    _min: UrlTicketMinAggregateOutputType | null
    _max: UrlTicketMaxAggregateOutputType | null
  }

  type GetUrlTicketGroupByPayload<T extends UrlTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UrlTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrlTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrlTicketGroupByOutputType[P]>
            : GetScalarType<T[P], UrlTicketGroupByOutputType[P]>
        }
      >
    >


  export type UrlTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    range_start?: boolean
    range_end?: boolean
    current_value?: boolean
  }, ExtArgs["result"]["urlTicket"]>

  export type UrlTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    range_start?: boolean
    range_end?: boolean
    current_value?: boolean
  }, ExtArgs["result"]["urlTicket"]>

  export type UrlTicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    range_start?: boolean
    range_end?: boolean
    current_value?: boolean
  }, ExtArgs["result"]["urlTicket"]>

  export type UrlTicketSelectScalar = {
    id?: boolean
    range_start?: boolean
    range_end?: boolean
    current_value?: boolean
  }

  export type UrlTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "range_start" | "range_end" | "current_value", ExtArgs["result"]["urlTicket"]>

  export type $UrlTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UrlTicket"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      range_start: number
      range_end: number
      current_value: number
    }, ExtArgs["result"]["urlTicket"]>
    composites: {}
  }

  type UrlTicketGetPayload<S extends boolean | null | undefined | UrlTicketDefaultArgs> = $Result.GetResult<Prisma.$UrlTicketPayload, S>

  type UrlTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UrlTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UrlTicketCountAggregateInputType | true
    }

  export interface UrlTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UrlTicket'], meta: { name: 'UrlTicket' } }
    /**
     * Find zero or one UrlTicket that matches the filter.
     * @param {UrlTicketFindUniqueArgs} args - Arguments to find a UrlTicket
     * @example
     * // Get one UrlTicket
     * const urlTicket = await prisma.urlTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UrlTicketFindUniqueArgs>(args: SelectSubset<T, UrlTicketFindUniqueArgs<ExtArgs>>): Prisma__UrlTicketClient<$Result.GetResult<Prisma.$UrlTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UrlTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UrlTicketFindUniqueOrThrowArgs} args - Arguments to find a UrlTicket
     * @example
     * // Get one UrlTicket
     * const urlTicket = await prisma.urlTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UrlTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, UrlTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UrlTicketClient<$Result.GetResult<Prisma.$UrlTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UrlTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlTicketFindFirstArgs} args - Arguments to find a UrlTicket
     * @example
     * // Get one UrlTicket
     * const urlTicket = await prisma.urlTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UrlTicketFindFirstArgs>(args?: SelectSubset<T, UrlTicketFindFirstArgs<ExtArgs>>): Prisma__UrlTicketClient<$Result.GetResult<Prisma.$UrlTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UrlTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlTicketFindFirstOrThrowArgs} args - Arguments to find a UrlTicket
     * @example
     * // Get one UrlTicket
     * const urlTicket = await prisma.urlTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UrlTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, UrlTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__UrlTicketClient<$Result.GetResult<Prisma.$UrlTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UrlTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UrlTickets
     * const urlTickets = await prisma.urlTicket.findMany()
     * 
     * // Get first 10 UrlTickets
     * const urlTickets = await prisma.urlTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const urlTicketWithIdOnly = await prisma.urlTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UrlTicketFindManyArgs>(args?: SelectSubset<T, UrlTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UrlTicket.
     * @param {UrlTicketCreateArgs} args - Arguments to create a UrlTicket.
     * @example
     * // Create one UrlTicket
     * const UrlTicket = await prisma.urlTicket.create({
     *   data: {
     *     // ... data to create a UrlTicket
     *   }
     * })
     * 
     */
    create<T extends UrlTicketCreateArgs>(args: SelectSubset<T, UrlTicketCreateArgs<ExtArgs>>): Prisma__UrlTicketClient<$Result.GetResult<Prisma.$UrlTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UrlTickets.
     * @param {UrlTicketCreateManyArgs} args - Arguments to create many UrlTickets.
     * @example
     * // Create many UrlTickets
     * const urlTicket = await prisma.urlTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UrlTicketCreateManyArgs>(args?: SelectSubset<T, UrlTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UrlTickets and returns the data saved in the database.
     * @param {UrlTicketCreateManyAndReturnArgs} args - Arguments to create many UrlTickets.
     * @example
     * // Create many UrlTickets
     * const urlTicket = await prisma.urlTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UrlTickets and only return the `id`
     * const urlTicketWithIdOnly = await prisma.urlTicket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UrlTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, UrlTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlTicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UrlTicket.
     * @param {UrlTicketDeleteArgs} args - Arguments to delete one UrlTicket.
     * @example
     * // Delete one UrlTicket
     * const UrlTicket = await prisma.urlTicket.delete({
     *   where: {
     *     // ... filter to delete one UrlTicket
     *   }
     * })
     * 
     */
    delete<T extends UrlTicketDeleteArgs>(args: SelectSubset<T, UrlTicketDeleteArgs<ExtArgs>>): Prisma__UrlTicketClient<$Result.GetResult<Prisma.$UrlTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UrlTicket.
     * @param {UrlTicketUpdateArgs} args - Arguments to update one UrlTicket.
     * @example
     * // Update one UrlTicket
     * const urlTicket = await prisma.urlTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UrlTicketUpdateArgs>(args: SelectSubset<T, UrlTicketUpdateArgs<ExtArgs>>): Prisma__UrlTicketClient<$Result.GetResult<Prisma.$UrlTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UrlTickets.
     * @param {UrlTicketDeleteManyArgs} args - Arguments to filter UrlTickets to delete.
     * @example
     * // Delete a few UrlTickets
     * const { count } = await prisma.urlTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UrlTicketDeleteManyArgs>(args?: SelectSubset<T, UrlTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UrlTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UrlTickets
     * const urlTicket = await prisma.urlTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UrlTicketUpdateManyArgs>(args: SelectSubset<T, UrlTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UrlTickets and returns the data updated in the database.
     * @param {UrlTicketUpdateManyAndReturnArgs} args - Arguments to update many UrlTickets.
     * @example
     * // Update many UrlTickets
     * const urlTicket = await prisma.urlTicket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UrlTickets and only return the `id`
     * const urlTicketWithIdOnly = await prisma.urlTicket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UrlTicketUpdateManyAndReturnArgs>(args: SelectSubset<T, UrlTicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlTicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UrlTicket.
     * @param {UrlTicketUpsertArgs} args - Arguments to update or create a UrlTicket.
     * @example
     * // Update or create a UrlTicket
     * const urlTicket = await prisma.urlTicket.upsert({
     *   create: {
     *     // ... data to create a UrlTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UrlTicket we want to update
     *   }
     * })
     */
    upsert<T extends UrlTicketUpsertArgs>(args: SelectSubset<T, UrlTicketUpsertArgs<ExtArgs>>): Prisma__UrlTicketClient<$Result.GetResult<Prisma.$UrlTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UrlTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlTicketCountArgs} args - Arguments to filter UrlTickets to count.
     * @example
     * // Count the number of UrlTickets
     * const count = await prisma.urlTicket.count({
     *   where: {
     *     // ... the filter for the UrlTickets we want to count
     *   }
     * })
    **/
    count<T extends UrlTicketCountArgs>(
      args?: Subset<T, UrlTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrlTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UrlTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UrlTicketAggregateArgs>(args: Subset<T, UrlTicketAggregateArgs>): Prisma.PrismaPromise<GetUrlTicketAggregateType<T>>

    /**
     * Group by UrlTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlTicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UrlTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UrlTicketGroupByArgs['orderBy'] }
        : { orderBy?: UrlTicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UrlTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrlTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UrlTicket model
   */
  readonly fields: UrlTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UrlTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UrlTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UrlTicket model
   */
  interface UrlTicketFieldRefs {
    readonly id: FieldRef<"UrlTicket", 'Int'>
    readonly range_start: FieldRef<"UrlTicket", 'Int'>
    readonly range_end: FieldRef<"UrlTicket", 'Int'>
    readonly current_value: FieldRef<"UrlTicket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UrlTicket findUnique
   */
  export type UrlTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlTicket
     */
    select?: UrlTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlTicket
     */
    omit?: UrlTicketOmit<ExtArgs> | null
    /**
     * Filter, which UrlTicket to fetch.
     */
    where: UrlTicketWhereUniqueInput
  }

  /**
   * UrlTicket findUniqueOrThrow
   */
  export type UrlTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlTicket
     */
    select?: UrlTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlTicket
     */
    omit?: UrlTicketOmit<ExtArgs> | null
    /**
     * Filter, which UrlTicket to fetch.
     */
    where: UrlTicketWhereUniqueInput
  }

  /**
   * UrlTicket findFirst
   */
  export type UrlTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlTicket
     */
    select?: UrlTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlTicket
     */
    omit?: UrlTicketOmit<ExtArgs> | null
    /**
     * Filter, which UrlTicket to fetch.
     */
    where?: UrlTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UrlTickets to fetch.
     */
    orderBy?: UrlTicketOrderByWithRelationInput | UrlTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UrlTickets.
     */
    cursor?: UrlTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UrlTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UrlTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UrlTickets.
     */
    distinct?: UrlTicketScalarFieldEnum | UrlTicketScalarFieldEnum[]
  }

  /**
   * UrlTicket findFirstOrThrow
   */
  export type UrlTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlTicket
     */
    select?: UrlTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlTicket
     */
    omit?: UrlTicketOmit<ExtArgs> | null
    /**
     * Filter, which UrlTicket to fetch.
     */
    where?: UrlTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UrlTickets to fetch.
     */
    orderBy?: UrlTicketOrderByWithRelationInput | UrlTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UrlTickets.
     */
    cursor?: UrlTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UrlTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UrlTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UrlTickets.
     */
    distinct?: UrlTicketScalarFieldEnum | UrlTicketScalarFieldEnum[]
  }

  /**
   * UrlTicket findMany
   */
  export type UrlTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlTicket
     */
    select?: UrlTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlTicket
     */
    omit?: UrlTicketOmit<ExtArgs> | null
    /**
     * Filter, which UrlTickets to fetch.
     */
    where?: UrlTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UrlTickets to fetch.
     */
    orderBy?: UrlTicketOrderByWithRelationInput | UrlTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UrlTickets.
     */
    cursor?: UrlTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UrlTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UrlTickets.
     */
    skip?: number
    distinct?: UrlTicketScalarFieldEnum | UrlTicketScalarFieldEnum[]
  }

  /**
   * UrlTicket create
   */
  export type UrlTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlTicket
     */
    select?: UrlTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlTicket
     */
    omit?: UrlTicketOmit<ExtArgs> | null
    /**
     * The data needed to create a UrlTicket.
     */
    data: XOR<UrlTicketCreateInput, UrlTicketUncheckedCreateInput>
  }

  /**
   * UrlTicket createMany
   */
  export type UrlTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UrlTickets.
     */
    data: UrlTicketCreateManyInput | UrlTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UrlTicket createManyAndReturn
   */
  export type UrlTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlTicket
     */
    select?: UrlTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UrlTicket
     */
    omit?: UrlTicketOmit<ExtArgs> | null
    /**
     * The data used to create many UrlTickets.
     */
    data: UrlTicketCreateManyInput | UrlTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UrlTicket update
   */
  export type UrlTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlTicket
     */
    select?: UrlTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlTicket
     */
    omit?: UrlTicketOmit<ExtArgs> | null
    /**
     * The data needed to update a UrlTicket.
     */
    data: XOR<UrlTicketUpdateInput, UrlTicketUncheckedUpdateInput>
    /**
     * Choose, which UrlTicket to update.
     */
    where: UrlTicketWhereUniqueInput
  }

  /**
   * UrlTicket updateMany
   */
  export type UrlTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UrlTickets.
     */
    data: XOR<UrlTicketUpdateManyMutationInput, UrlTicketUncheckedUpdateManyInput>
    /**
     * Filter which UrlTickets to update
     */
    where?: UrlTicketWhereInput
    /**
     * Limit how many UrlTickets to update.
     */
    limit?: number
  }

  /**
   * UrlTicket updateManyAndReturn
   */
  export type UrlTicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlTicket
     */
    select?: UrlTicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UrlTicket
     */
    omit?: UrlTicketOmit<ExtArgs> | null
    /**
     * The data used to update UrlTickets.
     */
    data: XOR<UrlTicketUpdateManyMutationInput, UrlTicketUncheckedUpdateManyInput>
    /**
     * Filter which UrlTickets to update
     */
    where?: UrlTicketWhereInput
    /**
     * Limit how many UrlTickets to update.
     */
    limit?: number
  }

  /**
   * UrlTicket upsert
   */
  export type UrlTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlTicket
     */
    select?: UrlTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlTicket
     */
    omit?: UrlTicketOmit<ExtArgs> | null
    /**
     * The filter to search for the UrlTicket to update in case it exists.
     */
    where: UrlTicketWhereUniqueInput
    /**
     * In case the UrlTicket found by the `where` argument doesn't exist, create a new UrlTicket with this data.
     */
    create: XOR<UrlTicketCreateInput, UrlTicketUncheckedCreateInput>
    /**
     * In case the UrlTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UrlTicketUpdateInput, UrlTicketUncheckedUpdateInput>
  }

  /**
   * UrlTicket delete
   */
  export type UrlTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlTicket
     */
    select?: UrlTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlTicket
     */
    omit?: UrlTicketOmit<ExtArgs> | null
    /**
     * Filter which UrlTicket to delete.
     */
    where: UrlTicketWhereUniqueInput
  }

  /**
   * UrlTicket deleteMany
   */
  export type UrlTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UrlTickets to delete
     */
    where?: UrlTicketWhereInput
    /**
     * Limit how many UrlTickets to delete.
     */
    limit?: number
  }

  /**
   * UrlTicket without action
   */
  export type UrlTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlTicket
     */
    select?: UrlTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlTicket
     */
    omit?: UrlTicketOmit<ExtArgs> | null
  }


  /**
   * Model Url
   */

  export type AggregateUrl = {
    _count: UrlCountAggregateOutputType | null
    _avg: UrlAvgAggregateOutputType | null
    _sum: UrlSumAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  export type UrlAvgAggregateOutputType = {
    id: number | null
  }

  export type UrlSumAggregateOutputType = {
    id: number | null
  }

  export type UrlMinAggregateOutputType = {
    id: number | null
    short_url: string | null
    long_url: string | null
    createdAt: Date | null
  }

  export type UrlMaxAggregateOutputType = {
    id: number | null
    short_url: string | null
    long_url: string | null
    createdAt: Date | null
  }

  export type UrlCountAggregateOutputType = {
    id: number
    short_url: number
    long_url: number
    createdAt: number
    _all: number
  }


  export type UrlAvgAggregateInputType = {
    id?: true
  }

  export type UrlSumAggregateInputType = {
    id?: true
  }

  export type UrlMinAggregateInputType = {
    id?: true
    short_url?: true
    long_url?: true
    createdAt?: true
  }

  export type UrlMaxAggregateInputType = {
    id?: true
    short_url?: true
    long_url?: true
    createdAt?: true
  }

  export type UrlCountAggregateInputType = {
    id?: true
    short_url?: true
    long_url?: true
    createdAt?: true
    _all?: true
  }

  export type UrlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Url to aggregate.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Urls
    **/
    _count?: true | UrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UrlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UrlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrlMaxAggregateInputType
  }

  export type GetUrlAggregateType<T extends UrlAggregateArgs> = {
        [P in keyof T & keyof AggregateUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrl[P]>
      : GetScalarType<T[P], AggregateUrl[P]>
  }




  export type UrlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrlWhereInput
    orderBy?: UrlOrderByWithAggregationInput | UrlOrderByWithAggregationInput[]
    by: UrlScalarFieldEnum[] | UrlScalarFieldEnum
    having?: UrlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrlCountAggregateInputType | true
    _avg?: UrlAvgAggregateInputType
    _sum?: UrlSumAggregateInputType
    _min?: UrlMinAggregateInputType
    _max?: UrlMaxAggregateInputType
  }

  export type UrlGroupByOutputType = {
    id: number
    short_url: string
    long_url: string
    createdAt: Date
    _count: UrlCountAggregateOutputType | null
    _avg: UrlAvgAggregateOutputType | null
    _sum: UrlSumAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  type GetUrlGroupByPayload<T extends UrlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrlGroupByOutputType[P]>
            : GetScalarType<T[P], UrlGroupByOutputType[P]>
        }
      >
    >


  export type UrlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    short_url?: boolean
    long_url?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["url"]>

  export type UrlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    short_url?: boolean
    long_url?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["url"]>

  export type UrlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    short_url?: boolean
    long_url?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["url"]>

  export type UrlSelectScalar = {
    id?: boolean
    short_url?: boolean
    long_url?: boolean
    createdAt?: boolean
  }

  export type UrlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "short_url" | "long_url" | "createdAt", ExtArgs["result"]["url"]>

  export type $UrlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Url"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      short_url: string
      long_url: string
      createdAt: Date
    }, ExtArgs["result"]["url"]>
    composites: {}
  }

  type UrlGetPayload<S extends boolean | null | undefined | UrlDefaultArgs> = $Result.GetResult<Prisma.$UrlPayload, S>

  type UrlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UrlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UrlCountAggregateInputType | true
    }

  export interface UrlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Url'], meta: { name: 'Url' } }
    /**
     * Find zero or one Url that matches the filter.
     * @param {UrlFindUniqueArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UrlFindUniqueArgs>(args: SelectSubset<T, UrlFindUniqueArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Url that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UrlFindUniqueOrThrowArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UrlFindUniqueOrThrowArgs>(args: SelectSubset<T, UrlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlFindFirstArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UrlFindFirstArgs>(args?: SelectSubset<T, UrlFindFirstArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlFindFirstOrThrowArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UrlFindFirstOrThrowArgs>(args?: SelectSubset<T, UrlFindFirstOrThrowArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Urls
     * const urls = await prisma.url.findMany()
     * 
     * // Get first 10 Urls
     * const urls = await prisma.url.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const urlWithIdOnly = await prisma.url.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UrlFindManyArgs>(args?: SelectSubset<T, UrlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Url.
     * @param {UrlCreateArgs} args - Arguments to create a Url.
     * @example
     * // Create one Url
     * const Url = await prisma.url.create({
     *   data: {
     *     // ... data to create a Url
     *   }
     * })
     * 
     */
    create<T extends UrlCreateArgs>(args: SelectSubset<T, UrlCreateArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Urls.
     * @param {UrlCreateManyArgs} args - Arguments to create many Urls.
     * @example
     * // Create many Urls
     * const url = await prisma.url.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UrlCreateManyArgs>(args?: SelectSubset<T, UrlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Urls and returns the data saved in the database.
     * @param {UrlCreateManyAndReturnArgs} args - Arguments to create many Urls.
     * @example
     * // Create many Urls
     * const url = await prisma.url.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Urls and only return the `id`
     * const urlWithIdOnly = await prisma.url.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UrlCreateManyAndReturnArgs>(args?: SelectSubset<T, UrlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Url.
     * @param {UrlDeleteArgs} args - Arguments to delete one Url.
     * @example
     * // Delete one Url
     * const Url = await prisma.url.delete({
     *   where: {
     *     // ... filter to delete one Url
     *   }
     * })
     * 
     */
    delete<T extends UrlDeleteArgs>(args: SelectSubset<T, UrlDeleteArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Url.
     * @param {UrlUpdateArgs} args - Arguments to update one Url.
     * @example
     * // Update one Url
     * const url = await prisma.url.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UrlUpdateArgs>(args: SelectSubset<T, UrlUpdateArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Urls.
     * @param {UrlDeleteManyArgs} args - Arguments to filter Urls to delete.
     * @example
     * // Delete a few Urls
     * const { count } = await prisma.url.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UrlDeleteManyArgs>(args?: SelectSubset<T, UrlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Urls
     * const url = await prisma.url.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UrlUpdateManyArgs>(args: SelectSubset<T, UrlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls and returns the data updated in the database.
     * @param {UrlUpdateManyAndReturnArgs} args - Arguments to update many Urls.
     * @example
     * // Update many Urls
     * const url = await prisma.url.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Urls and only return the `id`
     * const urlWithIdOnly = await prisma.url.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UrlUpdateManyAndReturnArgs>(args: SelectSubset<T, UrlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Url.
     * @param {UrlUpsertArgs} args - Arguments to update or create a Url.
     * @example
     * // Update or create a Url
     * const url = await prisma.url.upsert({
     *   create: {
     *     // ... data to create a Url
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Url we want to update
     *   }
     * })
     */
    upsert<T extends UrlUpsertArgs>(args: SelectSubset<T, UrlUpsertArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlCountArgs} args - Arguments to filter Urls to count.
     * @example
     * // Count the number of Urls
     * const count = await prisma.url.count({
     *   where: {
     *     // ... the filter for the Urls we want to count
     *   }
     * })
    **/
    count<T extends UrlCountArgs>(
      args?: Subset<T, UrlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UrlAggregateArgs>(args: Subset<T, UrlAggregateArgs>): Prisma.PrismaPromise<GetUrlAggregateType<T>>

    /**
     * Group by Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UrlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UrlGroupByArgs['orderBy'] }
        : { orderBy?: UrlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UrlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Url model
   */
  readonly fields: UrlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Url.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UrlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Url model
   */
  interface UrlFieldRefs {
    readonly id: FieldRef<"Url", 'Int'>
    readonly short_url: FieldRef<"Url", 'String'>
    readonly long_url: FieldRef<"Url", 'String'>
    readonly createdAt: FieldRef<"Url", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Url findUnique
   */
  export type UrlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where: UrlWhereUniqueInput
  }

  /**
   * Url findUniqueOrThrow
   */
  export type UrlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where: UrlWhereUniqueInput
  }

  /**
   * Url findFirst
   */
  export type UrlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Urls.
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Urls.
     */
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * Url findFirstOrThrow
   */
  export type UrlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Urls.
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Urls.
     */
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * Url findMany
   */
  export type UrlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Filter, which Urls to fetch.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Urls.
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * Url create
   */
  export type UrlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * The data needed to create a Url.
     */
    data: XOR<UrlCreateInput, UrlUncheckedCreateInput>
  }

  /**
   * Url createMany
   */
  export type UrlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Urls.
     */
    data: UrlCreateManyInput | UrlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Url createManyAndReturn
   */
  export type UrlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * The data used to create many Urls.
     */
    data: UrlCreateManyInput | UrlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Url update
   */
  export type UrlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * The data needed to update a Url.
     */
    data: XOR<UrlUpdateInput, UrlUncheckedUpdateInput>
    /**
     * Choose, which Url to update.
     */
    where: UrlWhereUniqueInput
  }

  /**
   * Url updateMany
   */
  export type UrlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Urls.
     */
    data: XOR<UrlUpdateManyMutationInput, UrlUncheckedUpdateManyInput>
    /**
     * Filter which Urls to update
     */
    where?: UrlWhereInput
    /**
     * Limit how many Urls to update.
     */
    limit?: number
  }

  /**
   * Url updateManyAndReturn
   */
  export type UrlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * The data used to update Urls.
     */
    data: XOR<UrlUpdateManyMutationInput, UrlUncheckedUpdateManyInput>
    /**
     * Filter which Urls to update
     */
    where?: UrlWhereInput
    /**
     * Limit how many Urls to update.
     */
    limit?: number
  }

  /**
   * Url upsert
   */
  export type UrlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * The filter to search for the Url to update in case it exists.
     */
    where: UrlWhereUniqueInput
    /**
     * In case the Url found by the `where` argument doesn't exist, create a new Url with this data.
     */
    create: XOR<UrlCreateInput, UrlUncheckedCreateInput>
    /**
     * In case the Url was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UrlUpdateInput, UrlUncheckedUpdateInput>
  }

  /**
   * Url delete
   */
  export type UrlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Filter which Url to delete.
     */
    where: UrlWhereUniqueInput
  }

  /**
   * Url deleteMany
   */
  export type UrlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Urls to delete
     */
    where?: UrlWhereInput
    /**
     * Limit how many Urls to delete.
     */
    limit?: number
  }

  /**
   * Url without action
   */
  export type UrlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UrlTicketScalarFieldEnum: {
    id: 'id',
    range_start: 'range_start',
    range_end: 'range_end',
    current_value: 'current_value'
  };

  export type UrlTicketScalarFieldEnum = (typeof UrlTicketScalarFieldEnum)[keyof typeof UrlTicketScalarFieldEnum]


  export const UrlScalarFieldEnum: {
    id: 'id',
    short_url: 'short_url',
    long_url: 'long_url',
    createdAt: 'createdAt'
  };

  export type UrlScalarFieldEnum = (typeof UrlScalarFieldEnum)[keyof typeof UrlScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UrlTicketWhereInput = {
    AND?: UrlTicketWhereInput | UrlTicketWhereInput[]
    OR?: UrlTicketWhereInput[]
    NOT?: UrlTicketWhereInput | UrlTicketWhereInput[]
    id?: IntFilter<"UrlTicket"> | number
    range_start?: IntFilter<"UrlTicket"> | number
    range_end?: IntFilter<"UrlTicket"> | number
    current_value?: IntFilter<"UrlTicket"> | number
  }

  export type UrlTicketOrderByWithRelationInput = {
    id?: SortOrder
    range_start?: SortOrder
    range_end?: SortOrder
    current_value?: SortOrder
  }

  export type UrlTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UrlTicketWhereInput | UrlTicketWhereInput[]
    OR?: UrlTicketWhereInput[]
    NOT?: UrlTicketWhereInput | UrlTicketWhereInput[]
    range_start?: IntFilter<"UrlTicket"> | number
    range_end?: IntFilter<"UrlTicket"> | number
    current_value?: IntFilter<"UrlTicket"> | number
  }, "id">

  export type UrlTicketOrderByWithAggregationInput = {
    id?: SortOrder
    range_start?: SortOrder
    range_end?: SortOrder
    current_value?: SortOrder
    _count?: UrlTicketCountOrderByAggregateInput
    _avg?: UrlTicketAvgOrderByAggregateInput
    _max?: UrlTicketMaxOrderByAggregateInput
    _min?: UrlTicketMinOrderByAggregateInput
    _sum?: UrlTicketSumOrderByAggregateInput
  }

  export type UrlTicketScalarWhereWithAggregatesInput = {
    AND?: UrlTicketScalarWhereWithAggregatesInput | UrlTicketScalarWhereWithAggregatesInput[]
    OR?: UrlTicketScalarWhereWithAggregatesInput[]
    NOT?: UrlTicketScalarWhereWithAggregatesInput | UrlTicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UrlTicket"> | number
    range_start?: IntWithAggregatesFilter<"UrlTicket"> | number
    range_end?: IntWithAggregatesFilter<"UrlTicket"> | number
    current_value?: IntWithAggregatesFilter<"UrlTicket"> | number
  }

  export type UrlWhereInput = {
    AND?: UrlWhereInput | UrlWhereInput[]
    OR?: UrlWhereInput[]
    NOT?: UrlWhereInput | UrlWhereInput[]
    id?: IntFilter<"Url"> | number
    short_url?: StringFilter<"Url"> | string
    long_url?: StringFilter<"Url"> | string
    createdAt?: DateTimeFilter<"Url"> | Date | string
  }

  export type UrlOrderByWithRelationInput = {
    id?: SortOrder
    short_url?: SortOrder
    long_url?: SortOrder
    createdAt?: SortOrder
  }

  export type UrlWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    short_url?: string
    AND?: UrlWhereInput | UrlWhereInput[]
    OR?: UrlWhereInput[]
    NOT?: UrlWhereInput | UrlWhereInput[]
    long_url?: StringFilter<"Url"> | string
    createdAt?: DateTimeFilter<"Url"> | Date | string
  }, "id" | "short_url">

  export type UrlOrderByWithAggregationInput = {
    id?: SortOrder
    short_url?: SortOrder
    long_url?: SortOrder
    createdAt?: SortOrder
    _count?: UrlCountOrderByAggregateInput
    _avg?: UrlAvgOrderByAggregateInput
    _max?: UrlMaxOrderByAggregateInput
    _min?: UrlMinOrderByAggregateInput
    _sum?: UrlSumOrderByAggregateInput
  }

  export type UrlScalarWhereWithAggregatesInput = {
    AND?: UrlScalarWhereWithAggregatesInput | UrlScalarWhereWithAggregatesInput[]
    OR?: UrlScalarWhereWithAggregatesInput[]
    NOT?: UrlScalarWhereWithAggregatesInput | UrlScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Url"> | number
    short_url?: StringWithAggregatesFilter<"Url"> | string
    long_url?: StringWithAggregatesFilter<"Url"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Url"> | Date | string
  }

  export type UrlTicketCreateInput = {
    range_start: number
    range_end: number
    current_value: number
  }

  export type UrlTicketUncheckedCreateInput = {
    id?: number
    range_start: number
    range_end: number
    current_value: number
  }

  export type UrlTicketUpdateInput = {
    range_start?: IntFieldUpdateOperationsInput | number
    range_end?: IntFieldUpdateOperationsInput | number
    current_value?: IntFieldUpdateOperationsInput | number
  }

  export type UrlTicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    range_start?: IntFieldUpdateOperationsInput | number
    range_end?: IntFieldUpdateOperationsInput | number
    current_value?: IntFieldUpdateOperationsInput | number
  }

  export type UrlTicketCreateManyInput = {
    id?: number
    range_start: number
    range_end: number
    current_value: number
  }

  export type UrlTicketUpdateManyMutationInput = {
    range_start?: IntFieldUpdateOperationsInput | number
    range_end?: IntFieldUpdateOperationsInput | number
    current_value?: IntFieldUpdateOperationsInput | number
  }

  export type UrlTicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    range_start?: IntFieldUpdateOperationsInput | number
    range_end?: IntFieldUpdateOperationsInput | number
    current_value?: IntFieldUpdateOperationsInput | number
  }

  export type UrlCreateInput = {
    short_url: string
    long_url: string
    createdAt?: Date | string
  }

  export type UrlUncheckedCreateInput = {
    id?: number
    short_url: string
    long_url: string
    createdAt?: Date | string
  }

  export type UrlUpdateInput = {
    short_url?: StringFieldUpdateOperationsInput | string
    long_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrlUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_url?: StringFieldUpdateOperationsInput | string
    long_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrlCreateManyInput = {
    id?: number
    short_url: string
    long_url: string
    createdAt?: Date | string
  }

  export type UrlUpdateManyMutationInput = {
    short_url?: StringFieldUpdateOperationsInput | string
    long_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrlUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_url?: StringFieldUpdateOperationsInput | string
    long_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UrlTicketCountOrderByAggregateInput = {
    id?: SortOrder
    range_start?: SortOrder
    range_end?: SortOrder
    current_value?: SortOrder
  }

  export type UrlTicketAvgOrderByAggregateInput = {
    id?: SortOrder
    range_start?: SortOrder
    range_end?: SortOrder
    current_value?: SortOrder
  }

  export type UrlTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    range_start?: SortOrder
    range_end?: SortOrder
    current_value?: SortOrder
  }

  export type UrlTicketMinOrderByAggregateInput = {
    id?: SortOrder
    range_start?: SortOrder
    range_end?: SortOrder
    current_value?: SortOrder
  }

  export type UrlTicketSumOrderByAggregateInput = {
    id?: SortOrder
    range_start?: SortOrder
    range_end?: SortOrder
    current_value?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UrlCountOrderByAggregateInput = {
    id?: SortOrder
    short_url?: SortOrder
    long_url?: SortOrder
    createdAt?: SortOrder
  }

  export type UrlAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UrlMaxOrderByAggregateInput = {
    id?: SortOrder
    short_url?: SortOrder
    long_url?: SortOrder
    createdAt?: SortOrder
  }

  export type UrlMinOrderByAggregateInput = {
    id?: SortOrder
    short_url?: SortOrder
    long_url?: SortOrder
    createdAt?: SortOrder
  }

  export type UrlSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}