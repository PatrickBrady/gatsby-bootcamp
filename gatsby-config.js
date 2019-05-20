module.exports = {
    siteMetadata: {
        title: 'Full-Stack Bootcamp',
        author: 'Pat Brady',
        description: 'My attempt to learn Gatsby',
        date: 'April 2019',
        contact: 'pat@patrickobrady.com'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark'
    ]
}