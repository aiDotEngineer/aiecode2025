const blankPage = () => null;
export default blankPage;

export function getServerSideProps() {
  return {
    redirect: {
      destination: '/worldsfair',
      permanent: false,
    },
  };
}
