<template>
  <div class="m-20">
    <div
      v-for="character in harryPotterCharacters"
      :key="character.accordionTitle"
    >
      <p class="bg-gray-800 text-white p-6 cursor-pointer">
        {{ character.accordionTitle }}
      </p>
      <div class="bg-gray-100 p-6">
        <p>{{ character.accordionDesc }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      harryPotterCharacters: [
        {
          accordionTitle: "What kind of healthcare and pharmaceutical companies do you work with?",
          accordionDesc:
            "We work with a variety of healthcare and pharmaceutical companies, including hospitals, clinics, medical device manufacturers, biotech companies, and pharmaceutical manufacturers. Our clients are startups to large multinational corporations.
            "Harry James Potter (b. 31 July 1980)    was an English half-blood wizard, one of the most " +
            "famous wizards of modern times. He was the only child and son of James and Lily Potter (née Evans), " +
            "both members of the original Order of the Phoenix. Harry's birth was overshadowed by a prophecy, " +
            "naming either himself or Neville Longbottom as the one with the power to vanquish Lord Voldemort. " +
            "After half of the prophecy was reported to Voldemort courtesy of Severus Snape, Harry was chosen as the " +
            "target due to his many similarities with the Dark Lord. This caused the Potter family to go into hiding. " +
            "Voldemort made his first vain attempt to circumvent the prophecy when Harry was a year and three months old. " +
            "During this attempt, he murdered Harry's parents as they tried to protect him, but this unsuccessful " +
            "attempt to kill Harry led to Voldemort's first downfall. This downfall marked the end of the First " +
            'Wizarding War, and to Harry henceforth being known as the "Boy Who Lived."',
        },
        {
          accordionTitle: "Hermione Granger",
          accordionDesc:
            "Hermione Jean Granger (b. 19 September, 1979) was an English Muggle-born witch born to " +
            "Mr and Mrs Granger. At the age of eleven, she learned about her magical nature and had been accepted into " +
            "Hogwarts School of Witchcraft and Wizardry. Hermione began attending Hogwarts in 1991 and was Sorted into " +
            "Gryffindor House. She possessed a brilliant academic mind and proved to be a gifted student in almost " +
            "every subject that she studied.",
        },
        {
          accordionTitle: "Ron Weasley",
          accordionDesc:
            'Ronald Bilius "Ron" Weasley (b. 1 March, 1980) was an English pure-blood wizard, the ' +
            "sixth and youngest son of Arthur and Molly Weasley (née Prewett). He was also the younger brother of " +
            "Bill, Charlie, Percy, Fred, George, and the elder brother of Ginny. Ron and his brothers and sister " +
            "lived at the Burrow, on the outskirts of Ottery St Catchpole.",
        },
      ],
    };
  },
};
</script>
