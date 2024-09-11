import { Theme } from '@radix-ui/themes';

import SingleResponsabilityPrinciple from './principles/single-responsability-principle';
// import OpenClosedPrinciple from './principles/open-closed-principle';
// import InterfaceSegregationPrinciple from './principles/interface-segregation-principle';
// import LiskovSustitutionPrinciple from './principles/liskov-subtitution-principle';
// import DependencyInversionPrinciple from './principles/dependency-inversion-principle';

export default function App() {
  return (
    <Theme accentColor='cyan'>
      <SingleResponsabilityPrinciple />
      {/* <OpenClosedPrinciple /> */}
      {/* <InterfaceSegregationPrinciple /> */}
      {/* <LiskovSustitutionPrinciple /> */}
      {/* <DependencyInversionPrinciple /> */}
    </Theme>
  );
}
