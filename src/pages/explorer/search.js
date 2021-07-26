import React from "react"
import { Helmet } from "react-helmet"
import qs from "qs"
import Asset from "@/components/pages/Explorer/Asset"
import Block from "@/components/pages/Explorer/Block"
import Transaction from "@/components/pages/Explorer/Transaction"
import Address from "@/components/pages/Explorer/Address"
import Policy from "@/components/pages/Explorer/Policy"
import MainLayout from "@/layouts/Main"

const Explorer = ({ location }) => {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true })
  return (
    <MainLayout>
      {query.asset && (
        <>
          <Helmet title={`Asset ${query.asset}`} />
          <Asset fingerprint={query.asset} />
        </>
      )}
      {query.block && (
        <>
          <Helmet title={`Block ${query.block}`} />
          <div className="ray__block pt-3">
            <Block blockNumber={query.block} />
          </div>
        </>
      )}
      {query.transaction && (
        <>
          <Helmet title={`Transaction ${query.transaction}`} />
          <div className="ray__block pt-3">
            <Transaction transaction={query.transaction} />
          </div>
        </>
      )}
      {query.address && (
        <>
          <Helmet title={`Address ${query.address}`} />
          <div className="ray__block pt-3">
            <Address address={query.address} />
          </div>
        </>
      )}
      {query.policyID && (
        <>
          <Helmet title={`Policy ID ${query.policyID}`} />
          <div className="ray__block pt-3">
            <Policy policyID={query.policyID} />
          </div>
        </>
      )}
    </MainLayout>
  )
}

export default Explorer
