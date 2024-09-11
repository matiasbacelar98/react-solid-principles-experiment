import { Theme } from '@radix-ui/themes';

// import SingleResponsabilityPrinciple from './principles/single-responsability-principle';
// import OpenClosedPrinciple from './principles/open-closed-principle';
// import InterfaceSegregationPrinciple from './principles/interface-segregation-principle';
import DependencyInversionPrinciple from './principles/dependency-inversion-principle';
// import LiskovSustitutionPrinciple from './principles/liskov-subtitution-principle';

export default function App() {
  return (
    <Theme accentColor='cyan'>
      {/* <SingleResponsabilityPrinciple /> */}
      {/* <OpenClosedPrinciple /> */}
      {/* <InterfaceSegregationPrinciple /> */}
      <DependencyInversionPrinciple />
      {/* <LiskovSustitutionPrinciple /> */}
    </Theme>
  );
}
