import Footer from './containers/footer'
import MainPage from './containers/main-page'
import PageNotFound from './containers/page-not-found'

const App = () => {
    const location = window.location.href
    const page = location.split(window.location.host)[1]
    const p = (page == '/' || page == '') ? '⌂ Main' : page
    
    if (page == '/' || page == '') {
        return (
            <>
                <MainPage page={p} />
                <Footer />
            </>
        )
    }

    // Page not found
    return (
        <>
            <PageNotFound page={p} />
            <Footer />
        </>
    )
}

export default App