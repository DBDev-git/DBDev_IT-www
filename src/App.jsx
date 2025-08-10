import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import MainPage from './components/main-page/MainPage'
import ProjectsPage from './components/projects-page/ProjectsPage'
import ExtensionsPage from './components/extensions-page/ExtensionsPage'
import PageNotFound from './components/page-not-found/PageNotFound'

const App = () => {
    const location = window.location.href
    const page = location.split(window.location.host)[1]
    const p = (page == '/' || page == '') ? '⌂ Main' : page
    
    // Main
    if (page == '/' || page == '') {
        return (
            <>
                <Header page={p} />
                <MainPage page={p} />
                <Footer />
            </>
        )
    }

    // Projects
    if (page == '/projects.html') {
        return (
            <>
                <Header page={p} />
                <ProjectsPage />
                <Footer />
            </>
        )
    }

    // Extensions
    if (page == '/extensions.html') {
        return (
            <>
                <Header page={p} />
                <ExtensionsPage />
                <Footer />
            </>
        )
    }

    // Page not found
    return (
        <>
            <Header page={p} />
            <PageNotFound page={p} />
            <Footer />
        </>
    )
}

export default App