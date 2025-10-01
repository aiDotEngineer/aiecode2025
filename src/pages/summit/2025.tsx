const blankPage = () => null;
export default blankPage;

export function getServerSideProps() {
  return {
    redirect: {
      destination: '/code/2025',
      permanent: false,
    },
  };
}
