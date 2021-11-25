import type { NextPage } from "next";

const Exercise4: NextPage = () => {
    return (
        <div className="container">
            <h1>Exercice 4</h1>
            <p>
                Consignes :
                <ul>
                    <li>Mettre en forme l&apos;exercice 4</li>
                    <li>Recopier les exercices 1 et 2 ci-dessous</li>
                    <li>
                        Les adapter pour que les 2 exercices soient sur 2 colonnes
                        différentes sur Desktop, et sur une seule colonne sur Mobile
                    </li>
                    <li>
                        Adapter le formulaire pour qu&apos;il respecte les guidelines
                        Bootstrap sur les formulaires
                    </li>
                </ul>
            </p>
            <div className="row">
                <div className="col-sm">
                    <h2>Exercice 1</h2>
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
                <div className="col-sm">
                    <h2>Exercice 2</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label">
                                Prénom
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                name="firstname"
                                placeholder="Prénom"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastname" className="form-label">
                                Nom
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastname"
                                name="lastname"
                                placeholder="Nom"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="exemple@mail.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Mot de passe"
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="cgu"
                            ></input>
                            <label className="form-check-label" htmlFor="cgu">
                                CGU
                            </label>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Exercise4;
