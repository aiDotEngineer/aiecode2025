export default () => null;

export function getServerSideProps() {
  return {
    redirect: {
      destination: '/worldsfair',
      permanent: false,
    },
  };
}
