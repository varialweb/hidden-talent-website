
import RichText from "@/app/RichText"
import { MongoClient, ObjectId } from "mongodb"
import Hero from "./Hero"
import { Suspense } from "react"

async function getListing(_id) {
  const mongo = new MongoClient(process.env.MONGO_URI)

  let jobListing = {}
  let companies = []
  let company = {}

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')

    const contentModels = await client.collection('content_models')
    const companyModel = await contentModels.findOne({ 'name.plural': 'companies' })
    // const jobListingModel = await contentModels.findOne({ 'name.plural': 'job-listings' })
    jobListing = await client.collection('contents').findOne({ _id: new ObjectId(_id) })
    company = await client.collection('contents').findOne({ _id: new ObjectId(jobListing.fields.company) })

    jobListing.fields.company = company

    await mongo.close()
  } catch(error) {
    console.error('Mongo Error', error)
  }

  
  return jobListing
}


export default async function ListingPage({ params }) {
  const listing = await getListing(params._id)

  return (
    <main className="px-4 py-8 flex flex-col items-center">
      <head>
        <title>{listing.fields.jobTitle}</title>
      </head>
      <Suspense fallback={<span>Loading...</span>}>
        <Hero listing={listing} />
        <RichText src={listing.fields.jobAnnouncement} className="flex flex-col gap-2 items-start max-w-2xl mx-auto" /> 
      </Suspense>
    </main>
  )
}