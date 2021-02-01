# Full-stack website template.

This is a [Next.js](https://nextjs.org/), [Apollo Graphql](https://www.apollographql.com/), [MongoDB](https://www.mongodb.com/) website template.

## Configuration

It really doesn't have much. Just run (recommend yarn)
```bash
npm install
# or 
yarn
```
to install all dependencies.

After that, you have to configure the database.

I'm using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_footprint_row_search_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=7326400240&gclid=CjwKCAiApNSABhAlEiwANuR9YCM3op_gWoHYBY0uFGDVww0nTECbWTL6WYzPpj-9toFHFte6ulY_QhoC_AYQAvD_BwE). Just visit their website and create a cluster, it is very easy.

Once you do that, go to `CONNECT` and setup a connection security, then choose the "Connect your application" connection method, and you will be provided with a db link.

Then create a `.env` file, and paste the link (replace user, password and dbName):
```
DB_URL= mongodb+srv://<user>:<password>@basewebsites.hm2ds.mongodb.net/<dbName>?retryWrites=true&w=majority
```

## Getting Started

Run the project in dev mode:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Information

All the resolvers, squema, type definitions, etc are in the `apollo` folder.

All the mutations and queries are in the `graphql` folder.

All the pages and components are (believe it or not) in the `pages` and `components` folders respectively.

## Learn More

To learn more about Next.js, Apollo Graphql or MongoDB, I strongly recommend reading their official documentation as they are very complete.

[Next.js Docs](https://nextjs.org/docs)

[Apollo Graphql](https://www.apollographql.com/docs/)

[MongoDB](https://docs.atlas.mongodb.com/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
