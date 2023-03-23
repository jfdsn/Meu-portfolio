const Page = ({ project }) => {
    return (
      <h1>{project.name}</h1>
    )
};

export default Page;

export async function getStaticPaths() {
    const data = await import('../../data/data.json');
    const projects = data.projects;

    const paths = projects.map(e => ({
      params: { id: e.id }
    }));

    return {
      paths,
      fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const data = await import('../../data/data.json');
    const project = data.projects.find(p => p.id === params.id);

    return {
      props: { project },
    }
}