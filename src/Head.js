import React from 'react'
import { Helmet } from 'react-helmet-async'

const Head = ({ title, description, image }) => {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

    const metadatas = {
        site_name: 'Projectit',
        title: 'Projectit - Donner vie à vos projets',
        description: 'Projectit - Donner vie à vos projets',
        image: `files/img/logo.png`
    }

    const seo = {
        title: title || metadatas.title,
        description: description || metadatas.description,
        image: `${process.env.REACT_APP_SERVER_URL}${image || metadatas.image}`,
        url: `${process.env.REACT_APP_URL}${pathname}`
    }

    return (
        <Helmet title={seo.title} defaultTitle={seo.title} titleTemplate={`%s | ${metadatas.site_name}`}>
            <html lang="fr" />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            <meta property="og:site_name" content={seo.site_name} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:site" content={metadatas.site_name} />

            <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" />
        </Helmet>
    )
}

export default Head;