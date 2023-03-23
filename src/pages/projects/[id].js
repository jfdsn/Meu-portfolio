const Page = () => {
    return (
      <h1>Teste</h1>
    )
};

export default Page;

export async function getStaticPaths() {
    
    return {
      paths: [{ params: { id: '1' }}],
      fallback: false,
    }
  }

export async function getStaticProps() {
    return {
      props: { post: {} },
    }
}