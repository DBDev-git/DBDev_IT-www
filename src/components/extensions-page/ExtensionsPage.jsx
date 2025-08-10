import ExtensionItem from './ExtensionItem'
import extensions from '../../assets/data/extensions.data'

const ExtensionsPage = () => (
    <>
        <h1>Extensions</h1>
        {extensions.length > 0 ? extensions.map(extension => (
            <div key={extension.id}>
                <ExtensionItem extension={extension} />
                <br />
            </div>
        )) : <p>Failed to load extensions :(</p>}
    </>
)

export default ExtensionsPage