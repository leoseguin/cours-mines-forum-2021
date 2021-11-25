import type { NextPage } from "next";

const Exercise1: NextPage = () => {
    return (
        <div>
            <h1>Exercice 1</h1>
            <p>
                Consignes :
                <ul>
                    <li>Mettre en forme l&apos;exercice 1</li>
                    <li>
                        En-dessous, regrouper les noms de balises vues jusqu&apos;ici dans
                        un tableau avec en-têtes ayant pour colonnes : Balise, Contenu.
                        Dans la colonne contenu spécifier la ou les balises qu&apos;il est
                        possible d&apos;insérer à l&apos;intérieur, ou &quot;texte&quot;
                        (pour les titres par exemple).
                    </li>
                </ul>
            </p>
            <table className="table">
                <tr>
                    <th>Balise</th>
                    <th>Contenu</th>
                </tr>
                <tr>
                    <td>Titre (h1,h2,...)</td>
                    <td>texte</td>
                </tr>
                <tr>
                    <td>Paragraphe (p)</td>
                    <td>tout</td>
                </tr>
                <tr>
                    <td>Liste non ordonnée (ul)</td>
                    <td>li</td>
                </tr>
                <tr>
                    <td>Liste ordonnée (ol)</td>
                    <td>li</td>
                </tr>
                <tr>
                    <td>Élément de liste (li)</td>
                    <td>tout</td>
                </tr>
            </table>
        </div>
    );
};

export default Exercise1;
