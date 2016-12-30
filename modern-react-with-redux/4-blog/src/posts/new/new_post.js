import React from 'react';
import {Link} from 'react-router';
import {reduxForm} from 'redux-form';
import {createPost} from '../../posts_repo';

const fields = [
    {name: 'title', type: 'input', label: 'Titre', errorMessage: 'Titre manquant'},
    {name: 'categories', type: 'input', label: 'Catégories', errorMessage: 'Categories manquantes'},
    {name: 'content', type: 'textarea', label: 'Message', errorMessage: 'Message manquant'},
];

class NewPost extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.renderField = this.renderField.bind(this);
    }

    onSubmit(props) {
        this.props.createPost(props).then(() => {
            this.context.router.push('/')
        });
    };

    renderField(field) {
        const formField = this.props.fields[field.name];
        return (
            <div key={field.name} className={`form-group ${formField.touched && formField.invalid ? 'has-danger' : ''}`}>
                <label>{field.label}</label>
                <field.type type="text" className="form-control form-control-danger" {...formField}/>
                <div className="text-help text-danger small take-place">{formField.touched ? formField.error : ''}</div>
            </div>
        )
    }

    render() {
        const {fields: {title, categories, content}, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <h3 className="">Nouveau blog</h3>
                {fields.map(f => this.renderField(f))}
                <button type="submit" className="btn btn-outline-primary">Terminé</button>
                <Link to="/" className="btn btn-outline-secondary">Annulé</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    fields.forEach(f => {
        if (!values[f.name]) errors[f.name] = f.errorMessage;
    });

    return errors;
}

const config = {
    form: 'NewPostForm',
    fields: fields.map(f => f.name),
    validate
};

export default reduxForm(config, null, {createPost})(NewPost);