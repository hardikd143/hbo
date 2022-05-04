import carShield from "../img/car-shield.png";
import carCrashed from "../img/car-crashed.png";
import handNote from "../img/hand-note.png";
import saving1 from "../img/saving-1.png";
import bikePink from "../img/bike-pink.png";
import personExp from "../img/person-experience.png";
const ackoContent = [
  {
    page: "car",
    reasons: [
      {
        id: "carr1",
        img: carShield,
        rTitle: "Stay safe",
        rContent:
          "Car insurance, also called auto or motor insurance, is a simple and effective way to protect your car from unforeseen risks such as accidents, thefts, fire, natural disasters, or third-party liabilities.",
      },
      {
        id: "carr2",
        img: carCrashed,
        rTitle: "Drive legal",
        rContent:
          "Having a valid third-party car insurance is mandatory by law when you are driving a car in India. Having good car insurance is a necessity to protect yourself from financial losses that come along with road accidents.",
      },
      {
        id: "carr3",
        img: handNote,
        rTitle: "Just relax",
        rContent:
          "ACKO makes car insurance easy. Choice of coverage, add-ons and discounts to save on premiums - get them all on ACKO. During claims, enjoy our door to door pick-up, repairs and drop services.",
      },
    ],
    policyDesc:
      "Planning to buy a car insurance policy? ACKO provides different types of car insurance policies for your unique needs.",
    policies: [
      {
        id: "carp1",
        policyName: "Third-party Cover",
        policyContent:
          "Owning third-party car insurance is mandatory while driving a car in India. It protects you against financial liabilities if you damage someone else’s vehicle/property or injure someone in an accident.",
      },
      {
        id: "carp2",
        policyName: "Own Damage Cover",
        policyContent:
          "Third-party Liability Car Insurance cover will not help if your car gets damaged due to theft, fire, natural disasters, etc. For that, you need to opt for Own Damage Insurance policy along with the Third-party car insurance policy.",
      },
      {
        id: "carp3",
        policyName: "Comprehensive - Basic",
        policyContent:
          "Comprehensive Car Insurance Cover not just secures you against third-party liability but also provides cover against damages or losses to your car due to accidents, theft, flooding, fire and more. It is advisable to opt for Comprehensive Car Insurance to give optimum protection to your vehicle and reduce financial liabilities.",
      },
      {
        id: "carp4",
        policyName: "Comprehensive - Super Saver",
        policyContent:
          "Exclusive on ACKO. Enjoy Comprehensive Cover benefits and superior claim experience. During claims, ACKO will pick up your car, repair it at one of our partner garages, and deliver back at no extra cost. Only catch: if you fail to inform ACKO before any claim related repairs, you will have to pay Rs. 5,000 as a deductible.",
      },
      { id: "carp5", policyName: "Zero Depreciation - Basic", policyContent: "Sometimes called the bumper to bumper plan, includes all the benefits of a Comprehensive - Basic plan while additionally covering depreciation costs of parts. Without Zero Depreciation benefits only partial costs of some parts like fibre & plastic parts are covered." },
      { id: "carp6", policyName: "Zero Depreciation - Smart Saver", policyContent: "Exclusive on ACKO. It has all the benefits Zero Depreciation - Basic at a discounted price. Only catch: during a claim, we pay for everything, you just pay ₹5,000 (above IRDAI/Govt. mandated charges) as a deductible. This gives upfront savings to safe drivers who think chances of them filing a claim are less." },
      { id: "carp7", policyName: "Zero Depreciation - Super Saver", policyContent: "Exclusive on ACKO. Enjoy Comprehensive Cover & Zero Depreciation benefits (read more below) and superior claim experience. During claims, ACKO will pick up your car, repair it at one of our partner garages, and deliver back at no extra cost. Only catch: if you fail to inform ACKO before any claim related repairs, you will have to pay Rs. 5,000 as a deductible." },
      { id: "carp8", policyName: "Personal Accident Cover", policyContent: "Personal Accident Cover is not a Car Insurance policy, but an additional cover to your car insurance. It is mandatory by law to own a Personal Accident Cover along with the Third-party Insurance Plan. It covers both permanent disability/death while driving a car." },
    ],
  },
  {
    page: "bike",
    reasons: [
      {
        id: "biker1",
        img: saving1,
        rTitle: "Save costs",
        rContent:
          "Two-wheeler insurance, commonly called bike insurance, protects your two wheeler from financial losses against accidental damages or theft.",
      },
      {
        id: "biker2",
        img: bikePink,
        rTitle: "Protect your bike",
        rContent:
          "Good bike insurance covers losses due to accidents, natural disaster, fire, theft, or riot. It also protects against injuries/damages caused to someone else or their property.",
      },
      {
        id: "biker3",
        img: personExp,
        rTitle: "Hassle-free experience",
        rContent:
          "On ACKO, you can buy insurance for your two wheeler completely online in just a few minutes. No inspection or paperwork needed - even if your previous insurance has expired.",
      },
    ],
    policyDesc:
      "Our bike insurance plans cover different types of two wheelers such as motorcycles, mopeds, scooters, and more.",
    policies: [
      {
        id: "bikep1",
        policyName: "Third-party Bike Insurance Plan",
        policyContent:
          "Third party Bike Insurance is mandatory in India. It protects you against financial liability if you accidentally damage someone else's vehicle or property or injure someone in an accident. However, it doesn't offer financial protection against damages or losses to your bike.",
      },
      {
        id: "bikep2",
        policyName: "Comprehensive Bike Insurance Plan",
        policyContent:
          "A Comprehensive Bike Insurance covers everything that Third-party insurance covers, and also covers losses or damages to your two-wheeler in case of an accident, theft, fire, natural calamities (floods, earthquakes), riots, or strikes.",
      },
      {
        id: "bikep1",
        policyName: "Personal Accident (PA) Cover",
        policyContent:
          "It is an additional cover to enhance your bike insurance plan. It is mandatory by law to own a PA Cover in India. While your bike insurance policy covers damages to your bike, the PA Cover provides financial protection in the event of disability/death while riding a two-wheeler.",
      },
    ],
  },
];

export default ackoContent;