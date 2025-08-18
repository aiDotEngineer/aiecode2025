const blankPage = () => null;
export default blankPage;

export function getServerSideProps() {
  return {
    redirect: {
      destination: '/2025/worldsfair',
      permanent: false,
    },
  };
}
