export default function decorate(block)
{
    const cards=[...block.children];
    cards.forEach((card) =>
    {
        card?.classList.add('card-sectiondiv');
        const cardimg= card.querySelector('p:has(img)');
        cardimg?.classList.add('card-sectiondiv__image');
        const cardtitle= card.querySelector('h2');
        cardtitle?.classList.add('card-sectiondiv__title');
        const carddescription= card.querySelector('p:not(:has(img))');
        carddescription?.classList.add('card-sectiondiv__description');
    });
}